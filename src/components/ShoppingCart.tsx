import React from "react";
import styles from "./ShoppingCart.module.css";

interface Props {}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e: React.MouseEvent) => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  render(): React.ReactNode {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button} onClick={this.handleClick}>
          <span>购物车2 (件)</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>1 name</li>
            <li>2 name</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
