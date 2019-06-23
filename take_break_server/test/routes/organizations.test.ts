import app from '../../app';
import { agent } from 'supertest';
import prepareDatabase from '../../prepareDatabase';
import { Organization } from '../../models';
import factory from '../../factories';
import * as faker from 'faker';
import { ERROR_CODE } from '../../routes/organizations';
import { HTTP_CODE } from '../../constants';

let accessToken: string;

// TQDO: apply Faker.js for sample data.
const name = 'Org Name';
const description = 'Org description';
const link = 'Org link';
const type = Organization.TYPE.INDIVIDUAL;
const slug = faker.lorem.slug();
const isSearchable = true;
const isJoinable = true;

beforeEach(async done => {
  await prepareDatabase();

  // TODO: strong type def
  const user: any = await factory.create('user');
  accessToken = user.generateJWT();
  done();
});

describe('POST /organizations', () => {
  const path = '/organizations';

  it('fails with invalid accessToken', async done => {
    const res = await agent(app)
      .post(path)
      .send({})
      .set('Authorization', '')
      .set('Accept', 'application/json');

    expect(res.status).toBe(HTTP_CODE.UNAUTHORIZED);
    done();
  });

  it('fails when link already exists', async done => {
    const SLUG = 'DUPLICATED_SLUG';

    await factory.create('organization', {
      slug: SLUG
    });

    const res = await agent(app)
      .post(path)
      .send({
        name,
        description,
        ['link' as string]: faker.internet.url(),
        type,
        slug: SLUG,
        isSearchable,
        isJoinable
      })
      .set('Authorization', accessToken)
      .set('Accept', 'application/json');

    // Status code
    expect(res.status).toBe(HTTP_CODE.UNPROCESSABLE_ENTITY);
    expect(res.body.code).toBe(ERROR_CODE.SLUG_ALREADY_USED);

    done();
  });

  it('creates a Organization', async done => {
    const res = await agent(app)
      .post(path)
      .send({
        name,
        description,
        ['link' as string]: link,
        type,
        slug,
        isSearchable,
        isJoinable
      })
      .set('Authorization', accessToken)
      .set('Accept', 'application/json');

    // Status code
    expect(res.status).toBe(HTTP_CODE.CREATED);

    // Response body
    expect(res.body.name).toBe(name);
    expect(res.body.description).toBe(description);
    expect(res.body.link).toBe(link);
    expect(res.body.type).toBe(type);
    expect(res.body.isSearchable).toBe(isSearchable);
    expect(res.body.isJoinable).toBe(isJoinable);

    // Database
    const allOrganizationsCount = await Organization.count();
    expect(allOrganizationsCount).toBe(1);

    done();
  });
});

describe('DELETE /organizations/:id', () => {
  it('fails with invalid accessToken', async done => {
    const res = await agent(app)
      .del('/organizations/:id')
      .send({})
      .set('Authorization', '')
      .set('Accept', 'application/json');

    expect(res.status).toBe(HTTP_CODE.UNAUTHORIZED);
    done();
  });

  it('mark the record as delete', async done => {
    // TODO: strong type def
    const organization: any = await factory.create('organization');

    // Database: before
    const allOrganizationsCountBefore = await Organization.count({
      where: {
        deletedAt: null
      }
    });
    expect(allOrganizationsCountBefore).toBe(1);

    const res = await agent(app)
      .del(`/organizations/${organization.id}`)
      .set('Authorization', accessToken)
      .set('Accept', 'application/json');

    // Response
    expect(res.status).toBe(HTTP_CODE.NO_CONTENT);
    expect(res.body).toBeNull;

    // Database: after
    const allOrganizationsCountAfter = await Organization.count({
      where: {
        deletedAt: null
      }
    });
    expect(allOrganizationsCountAfter).toBe(0);

    done();
  });

  it('errors if already deleted', async done => {
    const organization: any = await factory.create('organization');
    organization.destroy();

    const res = await agent(app)
      .del(`/organizations/${organization.id}`)
      .set('Authorization', accessToken)
      .set('Accept', 'application/json');

    // Response
    expect(res.status).toBe(HTTP_CODE.BAD_REQUEST);

    // Response Body
    expect(res.body.code).toBe(ERROR_CODE.RESOURCE_NOT_EXISTS);
    expect(res.body.message).toContain('already');

    done();
  });
});
