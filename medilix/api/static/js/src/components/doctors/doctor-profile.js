import React from 'react';

export default class DoctorProfile extends React.Component {
    render () {
        return (
            <section class="mcare-singledoc">
                <h2 class="mcare-h2">Our <span>Doctors</span></h2>

                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-lg-4 col-sm-4 col-xs-12">
                            <div class="meet-doc-box singledoc-box">
                                <img src="images/single-doc.jpg" class="img-responsive" alt="meet-doctors"/>

                                <div class="doc-main-info">
                                    <h4>Dr. Jack Thomas</h4>
                                    <span class="doc-role">Cardiologist</span>
                                    <ul class="meet-doc-social">
                                        <li><a href="#"><i class="fa fa-facebook meetdoc-social-icon"/></a></li>
                                        <li><a href="#"><i class="fa fa-twitter meetdoc-social-icon"/></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin meetdoc-social-icon"/></a></li>
                                        <li><a href="#"><i class="fa fa-google-plus meetdoc-social-icon"/></a></li>
                                    </ul>
                                </div>
                            </div>

                            <a href="#" class="mcare-button button3"><i class="mcare-flaticon-stethoscope11"/>Book An Appointment</a>

                        </div>

                        <div class="col-md-8 col-lg-8 col-sm-8 col-xs-12">
                            <div class="singledoc-content">
                               <h4>
                                   Dr. Brick Wall<br/><span class="roll">Assistant Dr. At Meditreat</span>
                               </h4>
                                <p class="text-content">
                                    <span class="caps-one">S</span>eamlessly aggregate e-business deliverables for long-term high-impact scenarios. Dynamically initiate scalable been in leadership skills without focused vortals. Globally leverage other's future-proof resources and end-to-end sources of era. Uniquely monetize multidisciplinary web-readiness without e-business alignments skills without focused vortals. Globally leverage other's future-proof resources and end-to-end sources of era. Uniquely monetize.
                                </p>
                                <p class="block-three text-content">
                                    Seamlessly aggregate e-business deliverables for long-term high-impact scenarios. Dynamically initiate scalable been in leadership skills without focused vortals. Dynamically initiate scalable been in leadership skills without focused vortals.
                                </p>
                                <h4 class="secondary">
                                    Experiance :
                                </h4>

                                <div class="col-md-6 col-lg-6 no-pad-l">
                                    <div class="mcare-progressbars">
                                        <div class="progress-box">
                                            <label>Cleanliness</label>
                                            <span>60%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                                            </div>
                                        </div>

                                        <div class="progress-box">
                                            <label>Hygine</label>
                                            <span>70%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-6 no-pad-r singledoc-speciality">
                                    <p class="text-content"><span>Speciality  <i class="pull-right">:</i></span>  Obstetrics and Gynecology</p>
                                    <p class="text-content"><span>Education  <i class="pull-right">:</i></span>  MD, OB/GYN</p>
                                    <p class="text-content"><span>Work Days  <i class="pull-right">:</i></span>  Monday, Wednesday, Thursday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}