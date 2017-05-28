import React from 'react';
import DoctorCard from './doctorCard';

export default class Doctors extends React.Component {
    componentWillMount () {
        this.props.getDoctorsList()
    }

    render () {
        const doctorCards = this.props.doctors.map((doctor) => {
            return <DoctorCard firstname={doctor.firstname}
                        lastname={doctor.lastname}
                        middlename={doctor.middlename}
                        experience={doctor.experience}
                        hospitals={doctor.hospital}
                        price={300}
                        specialization={doctor.specialization}
                        numOfFeedbacks={10}
                        bio={doctor.bio}
                        userId={doctor.user_id}/>
        });
        
        return (
            <div>
                <div className="bg-primary-dark">
                    <section className="content content-full content-boxed">
                        <div className="push-100-t push-50 text-center">
                            <h1 className="h2 text-white push-10 animated fadeInDown" data-toggle="appear" data-class="animated fadeInDown">Search for a suitable doctor</h1>
                        </div>
                    </section>
                </div>
                <div className="bg-gray-lighter">
                    <section className="content content-boxed">
                        <div className="push-50-t push-20">
                            <div className="row items-push-2x">
                                {doctorCards}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}