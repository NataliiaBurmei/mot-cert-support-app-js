const nock = require("nock");
import ProjectList from '../../components/ProjectList';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ProjectList', () => {

    nock('http:localhost')
        .persist()
        .get('/v1/projects')
        .reply(200, [{
            "id": "1",
            "name": "Project 1",
            "descripion": "This is the first project"
        },{
            "id": "2",
            "name": "Project 2",
            "descripion": "This is the second project"
        }])

    it('renders the list of projects correctly', async () => {
        const {asFragment, findByText} = render(<MemoryRouter>
            <ProjectList />
                </MemoryRouter>)

        await findByText('Projects')
        expect(asFragment()).toMatchSnapshot();

    });
});