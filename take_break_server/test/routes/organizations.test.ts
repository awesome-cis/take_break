import app from '../../app';
import { agent } from 'supertest';
import prepareDatabase from '../../prepareDatabase';
import { Organization } from '../../models';
import factory from '../../factories';

let accessToken: string;

// TQDO: apply Faker.js for sample data.
const name = 'Org Name';
const description = 'Org description';
const link = 'Org link';
const type = Organization.TYPE.INDIVIDUAL;
const isSearchable = true;
const isJoinable = true;

// TODO: Write failing case.
// TODO: Extract common logic. from `it` context.
beforeEach(async done => {
  await prepareDatabase();

  // TODO: strong type def
  const user: any = await factory.create('user');
  accessToken = user.generateJWT();
  done();
});

afterEach(() => {
  // TODO: Clear database data.
  //   - For now, this is ok.
  //   - Because setup logic drops table. So, it works.
});

describe('POST /organizations', () => {
  beforeEach(async done => {
    done();
  });

  it('creates a Organization', async done => {
    const res = await agent(app)
      .post('/organizations')
      .send({
        name,
        description,
        ['link' as string]: link,
        type,
        isSearchable,
        isJoinable
      })
      .set('Authorization', accessToken)
      .set('Accept', 'application/json');

    // Status code
    expect(res.status).toBe(201);

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
  it('mark the record as delete', async done => {
    // TODO: strong type def
    const organization: any = await factory.create('organization');

    // Database: before
    const allOrganizationsCountBefore = await Organization.count({
      where: {
        isDeleted: true
      }
    });
    expect(allOrganizationsCountBefore).toBe(0);

    const res = await agent(app)
      .del(`/organizations/${organization.id}`)
      .set('Authorization', accessToken)
      .set('Accept', 'application/json');

    // Response
    expect(res.status).toBe(204);
    expect(res.body).toBeNull;

    // Database: after
    const allOrganizationsCountAfter = await Organization.count({
      where: {
        isDeleted: true
      }
    });
    expect(allOrganizationsCountAfter).toBe(1);

    done();
  });
});
