/**
 * Created by faradj on 5/5/17.
 */
import React from 'react';
import Header from '../../components/dashboard/header';
import auth from '../../auth';

export default class HeaderContainer extends React.Component {
    render () {
        return <Header logout={auth.logout} />;
    }
}