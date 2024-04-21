import React from 'react'
import '../Integrate/Integrate.css'
import IntegrateTools from './IntegrateTools'
import google_img from '../../../assets/images/Google.svg'
import slack_img from '../../../assets/images/slack.svg'
import gmail_img from '../../../assets/images/gmail.svg'
import trello_img from '../../../assets/images/Trello.svg'
import mail_chimp from '../../../assets/images/MailChimp.svg'
import zoom_img from '../../../assets/images/zoom.svg'
import dropbox_img from '../../../assets/images/dropbox.svg'
import evernote_img from '../../../assets/images/evernote.svg'

const Integrate = () => {
  return (
   
    <section class="integrate">
                <div class="container">
                    <div class="work">
                        <h1>Integrate Top Work Tools</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                    </div>
                    <div class="toolbox">
                        <IntegrateTools url='https://www.google.com/' img={google_img} text='Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis.'/>
                        <IntegrateTools url='https://slack.com/intl/es-es/' img={slack_img} text='In eget a mauris quis. Tortor dui tempus quis integer est sit natoque placerat dolor.'/>                      
                        <IntegrateTools url='https://www.google.com/intl/sv/gmail/about/' img={gmail_img} text='Id mollis consectetur congue egestas egestas suspendisse blandit justo.'/>
                        <IntegrateTools url='https://trello.com/' img={trello_img} text='Rutrum interdum tortor, sed at nulla. A cursus bibendum elit purus cras praesent'/>
                        <IntegrateTools url='https://zoom.us/sv' img={zoom_img} text='Congue pellentesque amet, viverra curabitur quam diam scelerisque fermentum urna'/>
                        <IntegrateTools url='https://mailchimp.com/' img={mail_chimp} text='A elementum, imperdiet enim,pretium etiam facilisi in aenean quam mauris'/>
                        <IntegrateTools url='https://www.dropbox.com/' img={dropbox_img} text='Ut in turpis consequat odio diam lectus elementum. Est faucibus blandit platea'/>
                        <IntegrateTools url='https://evernote.com/es-es' img={evernote_img} text='Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu'/>
                       
                    </div>
                </div>
               
    </section>
  )
}

export default Integrate