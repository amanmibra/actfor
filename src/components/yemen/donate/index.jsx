import React, { Component } from 'react';

// components
import DonatePage from './../../common/DonatePage';

// images
import * as mona from './../../../images/mona.png';
import * as mwatana from './../../../images/mwatana.jpg';
import * as oxfam from './../../../images/oxfam.png';
import * as unicef from './../../../images/unicef.png';
import * as zahra from './../../../images/zahra.jpg';

class Donate extends Component {
  render() {
    const cards = [
      {
        header: 'Mona Relief',
        img: mona,
        link: 'https://www.monareliefye.org/',
        description: 'Yemen Organization for Humanitarian Relief and Development (Mona), is a national independent, non-governmental and non-profitable organization based in Yemen. The organization activities are mainly focused in the field of humanitarian relief and development by motivating and organizing volunteer, charitable and humanitarian work.'
      },
      {
        header: 'Mwatana for Human Rights',
        img: mwatana,
        link: 'https://mwatana.org/en/',
        description: 'Mwatana is an independent Yemeni organization that advocates for human rights through the verification and documentation of violations, provision of legal support to victims, lobbying, as well as awareness raising and capacity building.'
      },
      {
        header: 'Oxfam',
        img: oxfam,
        link: 'https://www.oxfamamerica.org/explore/countries/yemen/',
        description: 'Oxfam is a global organization working to end the injustice of poverty. We help people build better futures for themselves, hold the powerful accountable, and save lives in disasters.'
      },
      {
        header: 'UNICEF Yemen',
        img: unicef,
        link: 'https://www.unicef.org/yemen/',
        description: 'UNICEF established its presence in Yemen in the 1970s to respond to the urgent needs of children in the poorest country in the Middle East.'
      },
      {
        header: 'Zahra Trust',
        img: zahra,
        link: 'https://zahratrust.org/',
        description: 'The Zahra Trust was founded as a compassionate response to witnessing poverty first hand in the Middle East. It was established as a unique transparent organization that not only assists with the distribution of aid but also raises awareness of development, humanitarian and spiritual issues.'
      }
    ];


    return (
      <div>
        <DonatePage header="Donate" subheader="Donate to the help the Yemeni Crisis" cards={cards}/>
      </div>
    );
  }
}

export default Donate;