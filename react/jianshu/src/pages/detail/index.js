import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import { 
  DetailWrapper,
  Header,
  Content
} from './style';

class Detail extends PureComponent {
  render() {
    // console.log(this.props.match.params.id)
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});

// 在用了react-loadable之后组件不能直接获取路由参数
// 要想获取路由参数必须运行withRouter方法
export default connect(mapState, mapDispatch)(withRouter(Detail));