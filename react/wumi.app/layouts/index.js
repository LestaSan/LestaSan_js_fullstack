import * as React from 'react';
import withRouter from 'umi/withRouter';
import router from 'umi/router';
import { Tabs } from 'antd-mobile';
import * as styles from './index.less';

// 纯组件  这里面没有数据，单纯的做界面输出
// 函数组件 () => (<div>JSX</div>) React.createElement
// 纯组件 没有太多复杂操作  而Component是标准组件    性能 new
// layout?  负责头部和tabbar   umi 约定所有页面都会默认引入layout/index.js
export default class extends React.PureComponent {
    state = {
        showTab: true
    };
    tabData = [
        { title: '首页', href: '/home', icon: svgs[0], icon2: svgs2[0] },
        { title: '发现', href: '/discover', icon: svgs[1], icon2: svgs2[1] },
        { title: '订单', href: '/order', icon: svgs[2], icon2: svgs2[2] },
        { title: '我的', href: '/profile', icon: svgs[3], icon2: svgs2[3] },
    ];

    isActive (href, url = window.location.pathname) {
        return url.indexOf(href) > -1;
    }   

    gotoTab = url => {
        router.push(url)
    }

    render() {
        const { showTab } = this.state
        return (
            <div>
                <div className={showTab?styles.contentTab:styles.content}>{this.props.children}</div>
                {
                    showTab && (
                        <div className={styles.tabbar}>
                            <Tabs 
                            tabs={this.tabData}
                            onRenderContent={true}
                            animated={false}
                            renderTab={
                                tab => (
                                    <div className={styles.tab}>
                                        <div className={styles.icon}>
                                            {this.isActive(tab.href)?tab.icon2:tab.icon}
                                        </div>
                                        <div className={styles.title}
                                        style={{color: this.isActive(tab.href)?'#0089dc':''}}>
                                            {tab.title}
                                        </div>
                                    </div>
                                )
                            }
                            tabBarUnderlineStyle={{dispaly: 'none'}} 
                            onTabClick={tab => this.gotoTab(tab.href)}/>
                        </div>
                    )
                }
            </div>
        )
    }
}

const svgs = [
    <svg
        viewBox="0 0 22 22"
        id="index-regular.f67031c"
        width="100%"
        height="100%"
    >
        <path
            fill="#818181"
            d="M7.924 6.273A5.597 5.597 0 0 0 5.48 9.828a5.596 5.596 0 0 0 .787 4.242 5.646 5.646 0 0 0 7.793 1.66 2.188 2.188 0 0 1 3.02.638l.43.663a1.36 1.36 0 0 1-.3 1.798 10 10 0 0 1-.771.555 9.93 9.93 0 0 1-7.523 1.395 9.937 9.937 0 0 1-6.306-4.334C-.393 11.82.926 5.618 5.55 2.615a9.935 9.935 0 0 1 7.523-1.393 9.937 9.937 0 0 1 6.781 5.148c.318.64.12 1.396-.467 1.777l-8.54 5.546c-.632.41-1.478.23-1.89-.401l-.443-.684a2.182 2.182 0 0 1 .641-3.016l5.011-3.255a5.612 5.612 0 0 0-6.242-.064zm6.813 10.507a6.895 6.895 0 0 1-9.519-2.03 6.846 6.846 0 0 1-.96-5.182 6.847 6.847 0 0 1 2.986-4.344 6.869 6.869 0 0 1 8.13.46.892.892 0 0 1-.098 1.422l-5.44 3.534a.932.932 0 0 0-.274 1.287l.444.684a.117.117 0 0 0 .16.034l8.54-5.547c.05-.032.067-.095.035-.16a8.687 8.687 0 0 0-5.928-4.494 8.685 8.685 0 0 0-6.583 1.22c-4.044 2.627-5.198 8.056-2.572 12.1a8.686 8.686 0 0 0 5.517 3.792 8.68 8.68 0 0 0 6.583-1.22 9.01 9.01 0 0 0 .672-.483c.047-.038.057-.102.032-.142l-.43-.662a.938.938 0 0 0-1.295-.269zm5.88-5.517a2.376 2.376 0 0 1-.697 3.284l-.851.553a1.362 1.362 0 0 1-1.882-.401l-1.103-1.7a1.362 1.362 0 0 1 .4-1.882l1.699-1.102a1.357 1.357 0 0 1 1.883.399l.552.85zm-1.6-.168a.107.107 0 0 0-.07-.048.107.107 0 0 0-.083.016l-1.699 1.102a.112.112 0 0 0-.032.154l1.102 1.698c.021.032.056.05.095.05a.108.108 0 0 0 .06-.016l.849-.552a1.126 1.126 0 0 0 .33-1.555l-.551-.849z"
        />
    </svg>,
    <svg
        viewBox="0 0 22 22"
        id="discover-regular.17e03ee"
        width="100%"
        height="100%"
    >
        <path
            fill="#818181"
            d="M16.62 2.727a.75.75 0 0 1-.844 1.24 8.455 8.455 0 0 0-4.095-1.44 8.5 8.5 0 0 0-9.153 7.792 8.499 8.499 0 0 0 7.79 9.153 8.5 8.5 0 0 0 9.154-7.791 8.46 8.46 0 0 0-1.435-5.449.75.75 0 1 1 1.24-.842 9.96 9.96 0 0 1 1.69 6.411c-.442 5.505-5.264 9.609-10.768 9.166-5.505-.442-9.61-5.263-9.166-10.768C1.475 4.694 6.296.59 11.8 1.033c1.75.14 3.398.727 4.819 1.694zM14.638 7c.244 0 .44.254.331.506l-1.9 4.39c-.11.255-.264.494-.471.702a2.23 2.23 0 0 1-.712.476l-4.38 1.895a.363.363 0 0 1-.476-.476l1.895-4.38a2.22 2.22 0 0 1 1.177-1.182l4.391-1.9A.367.367 0 0 1 14.638 7zM12.45 9.55l-1.751.757a.737.737 0 0 0-.237.156.753.753 0 0 0-.156.236l-.758 1.752 1.742-.753a.766.766 0 0 0 .247-.161.733.733 0 0 0 .154-.234l.76-1.754z"
        />
    </svg>,
    <svg
        viewBox="0 0 22 22"
        id="order-regular.e1ebaca"
        width="100%"
        height="100%"
    >
        <path
            fill="#818181"
            d="M7.25 8a.75.75 0 0 1 0-1.5h7.5a.75.75 0 1 1 0 1.5h-7.5zm0 5.004a.75.75 0 1 1 0-1.5h4.498a.75.75 0 1 1 0 1.5H7.25zM3.5 3v16h9.75c2.9 0 5.25-2.35 5.25-5.25V5.748a.75.75 0 1 1 1.5 0v8.002a6.75 6.75 0 0 1-6.75 6.75H2.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 1 1 0 1.5H3.5z"
        />
    </svg>,
    <svg
        viewBox="0 0 22 22"
        id="profile-regular.813faec"
        width="100%"
        height="100%"
    >
        <path
            fill="#818181"
            d="M10.955 12H7.75a5.25 5.25 0 0 0-5.25 5.25v2.25h17v-2.25a5.244 5.244 0 0 0-2.626-4.548.75.75 0 0 1 .75-1.3l.183.11A6.745 6.745 0 0 1 21 17.25v3a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-3a6.75 6.75 0 0 1 6.436-6.743A4.984 4.984 0 0 1 6 7V6a5 5 0 0 1 10 0v1a5 5 0 0 1-5.045 5zM11 10.5A3.5 3.5 0 0 0 14.5 7V6a3.5 3.5 0 0 0-7 0v1a3.5 3.5 0 0 0 3.5 3.5z"
        />
    </svg>,
];

const svgs2 = [
    <svg viewBox="0 0 22 22" id="index.b8d51ef" width="100%" height="100%">
        <path
            fill="#0089dc"
            fillRule="evenodd"
            d="M16.822 17.089l.456.707c.212.33.14.778-.174 1.033a9.91 9.91 0 0 1-.767.555 9.817 9.817 0 0 1-7.473 1.395 9.867 9.867 0 0 1-6.265-4.334C-.383 11.822.927 5.618 5.52 2.616a9.81 9.81 0 0 1 7.475-1.394 9.866 9.866 0 0 1 6.264 4.334c.166.258.323.528.466.803.19.385.072.82-.262 1.039l-9.05 5.916a.783.783 0 0 1-1.086-.232l-.47-.73a1.668 1.668 0 0 1 .484-2.295l5.766-3.769a.286.286 0 0 0 .03-.455 6.576 6.576 0 0 0-7.821-.434 6.636 6.636 0 0 0-2.877 4.213 6.671 6.671 0 0 0 .926 5.026c1.99 3.085 6.104 3.968 9.17 1.969a1.65 1.65 0 0 1 2.288.482zm3.878-5.445c.56.863.314 2.02-.549 2.58l-.906.59a.786.786 0 0 1-1.086-.232l-1.177-1.812a.787.787 0 0 1 .23-1.086l1.813-1.176a.783.783 0 0 1 1.086.23l.589.906z"
        />
    </svg>,
    <svg viewBox="0 0 22 22" id="discover.3cd85b8" width="100%" height="100%">
        <path
            fill="#0089dc"
            fillRule="evenodd"
            d="M3.929 3.929c3.899-3.9 10.243-3.9 14.142 0 3.899 3.899 3.899 10.243 0 14.142-3.899 3.9-10.243 3.9-14.142 0-3.9-3.899-3.9-10.243 0-14.142zM14.639 7a.363.363 0 0 0-.146.03l-4.39 1.901c-.254.11-.493.264-.701.471a2.23 2.23 0 0 0-.476.712l-1.896 4.38a.363.363 0 0 0 .476.476l4.38-1.896a2.203 2.203 0 0 0 1.183-1.178l1.9-4.39A.363.363 0 0 0 14.64 7zM11 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
        />
    </svg>,
    <svg viewBox="0 0 22 22" id="order.5fa2fba" width="100%" height="100%">
        <path
            fill="#0089dc"
            fillRule="evenodd"
            d="M2.75 1.5h16.5a.75.75 0 0 1 .75.75v11.5a6.758 6.758 0 0 1-6.75 6.75H2.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75zm12 6.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0 0 1.5h7.5zm-3.002 5.003a.75.75 0 0 0 0-1.5H7.25a.75.75 0 0 0 0 1.5h4.498z"
        />
    </svg>,
    <svg viewBox="0 0 22 22" id="profile.e6a81e5" width="100%" height="100%">
        <path
            fill="#0089dc"
            fillRule="evenodd"
            d="M11 1c2.757 0 5 2.243 5 5v1c0 2.757-2.243 5-5 5S6 9.757 6 7V6c0-2.757 2.243-5 5-5zm5.967 10.071A6.76 6.76 0 0 1 21 17.251v3a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-3a6.76 6.76 0 0 1 4.033-6.18.992.992 0 0 1 1.135.263A6.476 6.476 0 0 0 11 13.5c1.919 0 3.642-.84 4.832-2.166a.993.993 0 0 1 1.135-.263z"
        />
    </svg>,
];