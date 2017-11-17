import React from 'react';


class ItemDetail extends React.Component {



  render(){
    console.log(this.props);
    const item = this.props.item;
    return (

        <h1>{item.name}</h1>
    );
  }


}

export default ItemDetail;
