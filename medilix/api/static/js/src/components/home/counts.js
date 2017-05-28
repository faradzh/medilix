/**
 * Created by faradj on 5/11/17.
 */
import React from 'react';

export default class Counts extends React.Component {
    componentDidMount () {
        // jQuery('[data-toggle="countTo"]').each(function(){
        //     var $this       = jQuery(this);
        //     var $after      = $this.data('after');
        //     var $before     = $this.data('before');
        //     var $speed      = $this.data('speed') ? $this.data('speed') : 1500;
        //     var $interval   = $this.data('interval') ? $this.data('interval') : 15;
        //
        //     $this.appear(function() {
        //         $this.countTo({
        //             speed: $speed,
        //             refreshInterval: $interval,
        //             onComplete: function() {
        //                 if($after) {
        //                     $this.html($this.html() + $after);
        //                 } else if ($before) {
        //                     $this.html($before + $this.html());
        //                 }
        //             }
        //         });
        //     });
        // });
    }

    render () {
        return (
            <div className="bg-gray-lighter">
                <section className="content content-boxed">
                    <div className="row items-push push-20-t push-20 text-center">
                        <div className="col-sm-4">
                            <div className="h1 push-5" data-toggle="countTo" data-to="15760" data-after="+"></div>
                            <div className="font-w600 text-uppercase text-muted">Accounts Today</div>
                        </div>
                        <div className="col-sm-4">
                            <div className="h1 push-5" data-toggle="countTo" data-to="3890" data-after="+"></div>
                            <div className="font-w600 text-uppercase text-muted">Products</div>
                        </div>
                        <div className="col-sm-4">
                            <div className="h1 push-5" data-toggle="countTo" data-to="890" data-after="+"></div>
                            <div className="font-w600 text-uppercase text-muted">Web Apps</div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}