import * as React from 'react'
import '../../css/project.css';
import QuestionSection from './QuestionSection';
import JoinCommunity from './JoinCommunity';
import DataTable from './DataTable';

function Portfolio () {
    return (
        <div className='pt-20 bg-[#030015] h-full w-full'>
            <DataTable />
            <QuestionSection />
            <JoinCommunity />
        </div>
    );
}

export default Portfolio;
