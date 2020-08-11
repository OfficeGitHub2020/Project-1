import React, { Component } from 'react';
import FirstSection from '../../components/FirstSection/FirstSection'

class MainPage extends Component {
    render() {
        return (
            <main>
                <div>
                    <h2 style={{ color: "darkgreen", fontFamily: "cursive" }}>Horizons</h2>
                    <h1>Concisely describe your offer</h1>
                    <FirstSection />
                </div>
            </main>
        )
    }
}

export default MainPage;