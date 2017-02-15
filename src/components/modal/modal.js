import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '350px',
    border: 'none',
    borderRadius: '0',
    backgroundColor: 'white',
  }
};

class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: true
        };

        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.refs.subtitle.style.color = '#3D3D3C';
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    render() {

        const container = {
            direction: "rtl",
            background: "white",
            borderRadius: '0',
            padding: '0px',
        };

        const row = {
           background: "#F9C2CC",
           borderRadius: '0',
           padding: '10px',
           margin: '0',
        };

        const col_button = {
           background: "#ffffff",
           borderRadius: '0',
           margin: '10px -20px',
        };

        const button = {
            color: '#ffffff',
            backgroundColor: '#3D3D3C',
            borderColor: '#ffffff',
            borderRadius: '0px',
            borderWidth: '3px',
            fontSize: '1.6rem',
            width: '100%',
            height: '60px',
            textAlign: 'center',
            lineHeight: '1.8rem',
        };

        const button_close = {
            color: 'rgba(61, 61, 60, 0.6)',
            backgroundColor: '#F9C2CC',
            borderRadius: '0px',
            borderWidth: '0px',
            fontSize: '1.0rem',
            width: '100%',
            textAlign: 'center',
            lineHeight: '1.2rem',
            margin: '10px 0px',
            padding: '4px 0',
            height: '100%',
        };

        const col = {
           background: "white",
           borderRadius: '0',
           border: "3px solid #3D3D3C",
           padding: '10px',
        };

        const p = {
            textAlign: 'center',
            fontSize: '1.4em',
            lineHeight: '1.6em',
            margin: '0',
        };

        return (
            <div className="container">
                <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal" overlayClassName="Modal_Overlay">
                    <div className="container" style={container}>
                        <div className="row" style={row}>
                            <div className="col" style={col_button}>
                                <a target="_blank" href="http://farahalhumaidhi.us14.list-manage.com/subscribe?u=ae232d495f9255f8b628c4d84&id=2e4b924c11">
                                    <button className="btn btn-primary" role="button" style={button} onClick={this.closeModal}>سجل الأن</button>
                                </a>
                            </div>
                            <div className="col" style={col}>
                                <h2 ref="subtitle" style={p}>على القائمه البريدية وكن قريب من تزيين منزلك بأحد الجوائز الثمينة التي سيجرى عليها السحب قريبا!</h2>
                            </div>
                            <button className="btn btn-primary" role="button" style={button_close} onClick={this.closeModal}>أغلق</button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
};

export default Popup;
