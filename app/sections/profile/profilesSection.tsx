import HeadComponent from './components/head/headComponent';
import OverviewComponent from './components/overview/overviewComponent';

export default function ProfileSection () {
    return (
        <div id='profile'>
            <div className='mb-8'>
                <HeadComponent></HeadComponent>
            </div>
            <OverviewComponent></OverviewComponent>
        </div>
    )
}