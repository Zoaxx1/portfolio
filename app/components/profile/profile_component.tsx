import HeadComponent from '@/app/components/profile/components/head/head_component';
import OverviewComponent from '@/app/components/profile/components/overview/overview_component';

export default function ProfileComponent () {
    return (
        <div>
            <div className='mb-8'>
                <HeadComponent></HeadComponent>
            </div>
            <OverviewComponent></OverviewComponent>
        </div>
    )
}