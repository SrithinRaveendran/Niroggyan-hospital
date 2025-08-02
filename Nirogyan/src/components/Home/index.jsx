import {Component} from 'react'
import {HomeMainBackground,HospitalImage,HomePageP,SpanElement} from './styledComponents'

class Home extends Component{
    render(){
        return(
            <HomeMainBackground>
                    <HospitalImage src="/Niroggyan_Hospital_Image.png"/>
                    <HomePageP>WE CARE FOR <br/><SpanElement>YOU</SpanElement></HomePageP>
            </HomeMainBackground>
        )
    }
}

export default Home