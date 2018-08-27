import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from "./style";

class Header extends PureComponent {
  render() {
    const { focused, handleInputBlur, handleInputFocus, list, login, logout } = this.props;
    return <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {login ? <NavItem className="right" onClick={logout}>
              退出
            </NavItem> : <Link to="/login">
              <NavItem className="right">登录</NavItem>
            </Link>}
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch onFocus={() => {
                  handleInputFocus(list);
                }} onBlur={handleInputBlur} className={focused ? "focused" : ""} />
            </CSSTransition>
            <i
              className={
                focused ? "focused iconfont zoom" : "iconfont zoom"
              }
            >
              &#xe617;
            </i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>;
  }
  getListArea() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseIn,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    // 此时list是immutable类型 它不支持list[i]
    // immutable类型数组有toJS方法将数组转换成普通的js数组
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseIn}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                handleChangePage(page, totalPage, this.spinIcon);
              }}
            >
              <i
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              // immutable类型数组支持map
              // list.map((item) => {
              //   return (<SearchInfoItem key={item}>{item}</SearchInfoItem>)
              // })

              pageList
            }
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    // focused: state.header.focused

    // 用了immutable后 get方法传入focused
    // focused: state.header.get('focused')

    // 用了redux-immutable后 state也变成了immutable对象
    // focused: state.get('header').get('focused')
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(['login', 'login'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      console.log(list);
      if (list.size === 0) {
        dispatch(actionCreators.getList()); // 请求数据
      }
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseIn() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      // spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
      spin.style.transform = `rotate(${originAngle + 360}deg`;
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
