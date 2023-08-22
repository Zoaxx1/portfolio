import HeadComponent from './components/head/head_component';
import OverviewComponent from './components/overview/overview_component';

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