import React from 'react';
import { Link } from 'react-router';
import 'vide/dist/jquery.vide.min';
import 'jquery.appear/jquery.appear';
import jQuery from 'jquery';
import Testimonials from './components/home/testimonials';
import InfoBlocks from './components/home/infoBlocks';
import HomeHeader from './components/home/homeHeader';

export default class Index extends React.Component {
    componentDidMount () {
        jQuery('[data-toggle="appear"]').each(function(){
            var $windowW    = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var $this       = jQuery(this);
            var $lHtml      = jQuery('html');
            var $class      = $this.data('class') ? $this.data('class') : 'animated fadeIn';
            var $offset     = $this.data('offset') ? $this.data('offset') : 0;
            var $timeout    = ($lHtml.hasClass('ie9') || $windowW < 992) ? 0 : ($this.data('timeout') ? $this.data('timeout') : 0);

            $this.appear(function() {
                setTimeout(function(){
                    $this
                        .removeClass('visibility-hidden')
                        .addClass($class);
                }, $timeout);
            },{accY: $offset});
        });
        jQuery('.bg-video').vide("/static/videos/hero_tech");
    }

    render () {
        return (
            <div>
                <HomeHeader />
                <div className="bg-video" data-vide-bg="/static/videos/hero_tech" data-vide-options="posterType: jpg, position: 50% 75%">
                    <div className="bg-primary-dark-op">
                        <section className="content content-full content-boxed">
                            <div className="text-center push-30-t visibility-hidden" data-toggle="appear" data-className="animated fadeIn">
                                <a className="fa-2x text-white" href="">
                                    <i className="fa fa-medium text-primary push-5-r"/>edilix
                                </a>
                            </div>
                            <div className="push-100-t push-50 text-center">
                                <h1 className="h2 font-w700 text-white push-20 visibility-hidden" data-toggle="appear" data-className="animated fadeInDown">Бесплатный сервис поиска врачей</h1>
                                <h2 className="h4 text-white-op visibility-hidden" data-toggle="appear" data-timeout="750" data-className="animated fadeIn"><em>Найди врача и запишись на прием</em></h2>
                                <div className="push-50-t push-20 text-center">
                                    <Link to="/app/doctors" className="btn btn-rounded btn-noborder btn-lg btn-success push-10-r push-5 visibility-hidden" data-toggle="appear" data-className="animated fadeInLeft">
                                        <i className="fa fa-ambulance push-10-r"/>Каталог врачей
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <InfoBlocks />
                <Testimonials />
            </div>
        )
    }
}