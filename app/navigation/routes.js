// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {
    ChannelView,
    ChannelDrawer,
    ChannelInfo,
    ChannelMembers,
    ChannelAddMembers,
    LoadTeam,
    Login,
    Mfa,
    OptionsModal,
    RightMenuDrawer,
    Root,
    Search,
    SelectServer,
    SelectTeam,
    Thread
} from 'app/scenes';

import keyMirror from 'service/utils/key_mirror';

export const RouteTransitions = keyMirror({
    Horizontal: null
});

export const Routes = {
    ChannelInfo: {
        key: 'ChannelInfo',
        transition: RouteTransitions.Horizontal,
        component: ChannelInfo,
        navigationProps: {
            title: {id: 'mobile.routes.channelInfo', defaultMessage: 'Info'}
        }
    },
    ChannelDrawer: {
        key: 'ChannelDrawer',
        component: ChannelDrawer
    },
    ChannelMembers: {
        key: 'ChannelMembers',
        transition: RouteTransitions.Horizontal,
        component: ChannelMembers,
        navigationProps: {
            title: {id: 'channel_header.manageMembers', defaultMessage: 'Manage Members'}
        }
    },
    ChannelAddMembers: {
        key: 'ChannelAddMembers',
        transition: RouteTransitions.Horizontal,
        component: ChannelAddMembers,
        navigationProps: {
            title: {id: 'channel_header.addMembers', defaultMessage: 'Add Members'}
        }
    },
    ChannelView: {
        key: 'ChannelView',
        transition: RouteTransitions.Horizontal,
        component: ChannelView
    },
    LoadTeam: {
        key: 'LoadTeam',
        component: LoadTeam
    },
    Login: {
        key: 'Login',
        transition: RouteTransitions.Horizontal,
        component: Login,
        navigationProps: {
            title: {id: 'mobile.routes.login', defaultMessage: 'Login'}
        }
    },
    Mfa: {
        key: 'Mfa',
        transition: RouteTransitions.Horizontal,
        component: Mfa,
        navigationProps: {
            title: {id: 'mobile.routes.mfa', defaultMessage: 'Multi-factor Authentication'}
        }
    },
    OptionsModal: {
        key: 'OptionsModal',
        component: OptionsModal,
        navigationProps: {
            hideNavBar: true
        }
    },
    RightMenuDrawer: {
        key: 'RightMenuDrawer',
        component: RightMenuDrawer
    },
    Root: {
        key: 'Root',
        component: Root
    },
    Search: {
        key: 'Search',
        transition: RouteTransitions.Horizontal,
        component: Search
    },
    SelectServer: {
        key: 'SelectServer',
        component: SelectServer,
        navigationProps: {
            title: {id: 'mobile.routes.enterServerUrl', defaultMessage: 'Enter Server URL'}
        }
    },
    SelectTeam: {
        key: 'SelectTeam',
        transition: RouteTransitions.Horizontal,
        component: SelectTeam,
        navigationProps: {
            title: {id: 'mobile.routes.selectTeam', defaultMessage: 'Select Team'}
        }
    },
    Thread: {
        key: 'Thread',
        transition: RouteTransitions.Horizontal,
        component: Thread
    }
};

export default Routes;