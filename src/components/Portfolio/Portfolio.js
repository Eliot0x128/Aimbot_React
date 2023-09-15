import * as React from 'react'
import '../../css/project.css';
import QuestionSection from './QuestionSection';
import JoinCommunity from './JoinCommunity';
import DataTable from './DataTable';
import RewardPool from './RewardPool';

function Portfolio () {
    return (
        <div className='pt-20 bg-[#030015] w-full h-full relative z-[100]'>
            <RewardPool />
            <DataTable />
            <QuestionSection />
            <JoinCommunity />
        </div>
    );
}

export default Portfolio;
