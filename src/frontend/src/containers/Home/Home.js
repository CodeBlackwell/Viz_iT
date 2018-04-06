import React, {Component} from 'react';
import {ScrollContainer, ScrollSection} from 'react-onepage-scroll';

import {ScrollFlex, Container} from '../../theme/grid';
import {
    Image,
    HeroImage,
    RevealP
} from './Home.style';

import WhenInView from '../../components/WhenInView/WhenInView';


export default class Home extends Component {

    render() {
        return (
            <ScrollContainer>
                <ScrollSection pageId={0}>
                    <ScrollFlex justify="space-around">
                        {/*<Image src={require('../../assets/Me.jpg')} alt="Me"/>*/}
                        <HeroImage>
                            <h1>LeChristopher Blackwell</h1>
                            <h2>Fullstack Software Engineer</h2>
                        </HeroImage>
                    </ScrollFlex>
                </ScrollSection>
                <ScrollSection pageId={1}>
                    <Container>
                        <WhenInView>
                            { ({isInView}) =>
                                <RevealP hide={!isInView}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum nulla
                                    est,
                                    et mattis leo pellentesque malesuada. Vivamus sodales accumsan orci, nec malesuada
                                    nisi
                                    molestie quis. Donec turpis lectus, congue sit amet sem tempus, varius auctor ex.
                                    Sed
                                    est
                                    nulla, consectetur sit amet dignissim ac, vulputate at leo. Sed dignissim eleifend
                                    risus
                                    a
                                    pellentesque. Cras imperdiet tortor non nisi placerat lobortis. Sed non orci
                                    tincidunt
                                    ante mollis ultricies sit amet sed tortor. Vivamus at enim tellus. Aliquam erat
                                    volutpat.
                                </RevealP>
                            }
                        </WhenInView>
                        <WhenInView>
                            { ({isInView}) =>
                                <RevealP hide={!isInView}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum nulla
                                    est,
                                    et mattis leo pellentesque malesuada. Vivamus sodales accumsan orci, nec malesuada
                                    nisi
                                    molestie quis. Donec turpis lectus, congue sit amet sem tempus, varius auctor ex.
                                    Sed
                                    est
                                    nulla, consectetur sit amet dignissim ac, vulputate at leo. Sed dignissim eleifend
                                    risus
                                    a
                                    pellentesque. Cras imperdiet tortor non nisi placerat lobortis. Sed non orci
                                    tincidunt
                                    ante mollis ultricies sit amet sed tortor. Vivamus at enim tellus. Aliquam erat
                                    volutpat.
                                </RevealP>
                            }
                        </WhenInView>
                        <WhenInView>
                            { ({isInView}) =>
                                <RevealP hide={!isInView}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum nulla
                                    est,
                                    et mattis leo pellentesque malesuada. Vivamus sodales accumsan orci, nec malesuada
                                    nisi
                                    molestie quis. Donec turpis lectus, congue sit amet sem tempus, varius auctor ex.
                                    Sed
                                    est
                                    nulla, consectetur sit amet dignissim ac, vulputate at leo. Sed dignissim eleifend
                                    risus
                                    a
                                    pellentesque. Cras imperdiet tortor non nisi placerat lobortis. Sed non orci
                                    tincidunt
                                    ante mollis ultricies sit amet sed tortor. Vivamus at enim tellus. Aliquam erat
                                    volutpat.
                                </RevealP>
                            }
                        </WhenInView>
                        
                    </Container>
                </ScrollSection>
            </ScrollContainer>
        )
    }
}