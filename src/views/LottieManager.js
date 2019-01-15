import React from "react";
import Lottie from "react-lottie";

class LottieManager extends React.Component {
  render() {
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: this.props.animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={this.props.height}
          width={this.props.width}
          margin={-24}
          isClickToPauseDisabled={true}
          isPaused={this.props.isPaused}
          eventListeners={[
            {
              eventName: "complete",
              callback: () => {
                this.props.onComplete();
              }
            }
          ]}
        />
      </div>
    );
  }
}

export default LottieManager;
