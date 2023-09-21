import * as React from 'react'
import '../../css/project.css';
import QuestionSection from './QuestionSection';
import JoinCommunity from './JoinCommunity';
import DataTables from './DataTables';
import RewardPool from './RewardPool';

function Portfolio () {
    return (
        <div className='pt-20 bg-[#030015] w-full h-full relative z-[100]'>
            <RewardPool />
            <DataTables />
            <QuestionSection />
            <JoinCommunity />
        </div>
    );
}

export default Portfolio;

/*
Updated List based on your feedback
-Question Section width fixed
-Generated From AI percent fixed
-Token string format of tables fixed
-Table spacing fixed
-AI sells profit fixed
-Table WalletID fixed
-Duration of AI table fixed
-Firefox & Brave browser tested
*/
