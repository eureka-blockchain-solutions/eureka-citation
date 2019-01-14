import React, {Component} from 'react';
import ToolTip from 'react-portal-tooltip';

const styles = {
    wrapper: {
        display: 'inline'
    },
    child: {
        display: 'inline'
    },
    tooltip: {
        boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(0, 0, 0, 0.2)',
        borderRadius: 0,
        fontSize: 13,
        padding: '5px 10px',
        maxWidth: 400,
        transition:
            'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, left 0s, right 0s'
    },
    arrow: {}
};

class Popover extends Component {
    state = {isActive: false};
    show() {
        this.setState({isActive: true});
    }
    hide() {
        this.setState({isActive: false});
    }
    render() {
        let {arrow = 'left', ...props} = this.props;
        return (
            <span style={styles.wrapper}>
        <span
            onMouseEnter={this.show.bind(this)}
            onMouseLeave={this.hide.bind(this)}
            id={this.props.id}
            style={styles.child}
        >
          {props.children}
        </span>
        <ToolTip
            active={this.state.isActive}
            position={this.props.position || 'top'}
            arrow={arrow}
            style={{style: styles.tooltip, arrowStyle: styles.arrow}}
            parent={`#${this.props.id}`}
            tooltipTimeout={this.props.timeout || 300}
        >
          {props.content}
        </ToolTip>
      </span>
        );
    }
}

export default Popover;
