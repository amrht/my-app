import React from 'react';
import Navigation from './../components/navbar.js';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from './Icon.svg';
import bgi from './bgi2.jpg';
import elps from './elps.png';

const Page = () => {
  return(
    <div className='bg-slate-100 h-full overflow-hidden min-w-full' style={{fontFamily:'Poppins'}}>
    <div class='crd h-80 bg-white' style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}>
    <div className='search h-64 w-full' style={{ backgroundImage: `url(${bgi})`,backgroundSize:'cover' }}>
      <div className="grid w-full">
        <span class="w-4/5" style={{margin:'0 auto'}}><input className="placeholder:italic mt-32 h-10 bg-white w-3/5 border rounded-l py-2 pl-9 pr-3 shadow-sm outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for Job Titles" type="text" name="search"/>
        <select name="cars" id="cars" class='h-10 w-1/5 sm:text-sm'>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
        <button className="text-white h-10 rounded-r w-1/5" style={{ backgroundImage: 'linear-gradient(to right, #E61B1E, #4E47E5)'}}>Search</button></span>
      </div>
    </div>
    <div class='h-16 pt-3 w-4/5 text-left' style={{margin:'auto'}}>
    <p class='text-xl' style={{margin:'auto'}}> BreadCrumbs </p>
    </div>
    </div>
    <div class="centr w-4/5 block md:flex mt-4 bg-slate-100" style={{ justifyContent:'space-around', margin:'0 auto'}}>
      <div class='float-right w-full md:w-3/4' style={{paddingRight:'15px'}}> 
      
      <Card style={{borderRadius:'15px', marginBottom:'16px', marginTop:'10px', padding:'20px' , width:'100%'}}>
        <Card.Body class="flex" style={{alignItems:'flex-start'}}>
          <div className='float-left h-24 w-24 ml-4 md:ml-8'>
          <img className='h-16 w-16 mt-1'/>
          </div> 
          <div class='float-right pl-2 pr-4 w-full'>
          
          <p class='text-2xl text-left mb-0'>House Driver Required in Qatar</p>
            <p class="text-left text-slate-500">Netflix Technologies</p>
            </div>


        </Card.Body>
        <div>
            <div class='tiles float-left flex' style={{alignItems:'center', width:'160px', padding:'4px', borderRadius:'4px', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            <img src={elps} style={{height:'38px', width:'38px'}}/>
            <div class='p-2 text-left'>
            <p class='text-2xl mb-0'>105</p>
            <p class='text-sm text-slate-500 mb-0' style={{marginTop:'-8px'}}>Vacancies</p>
            </div>
            </div>

            <div class='tiles m-2 float-left flex' style={{alignItems:'center', width:'160px', padding:'4px', borderRadius:'4px', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            <img src={elps} style={{height:'38px', width:'38px'}}/>
            <div class='p-2 text-left'>
            <p class='text-2xl mb-0'>105</p>
            <p class='text-sm text-slate-500 mb-0' style={{marginTop:'-8px'}}>Vacancies</p>
            </div>
            </div>

            <div class='tiles m-2 float-left flex' style={{alignItems:'center', width:'160px', padding:'4px', borderRadius:'4px', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            <img src={elps} style={{height:'38px', width:'38px'}}/>
            <div class='p-2 text-left'>
            <p class='text-2xl mb-0'>105</p>
            <p class='text-sm text-slate-500 mb-0' style={{marginTop:'-8px'}}>Vacancies</p>
            </div>
            </div>

            <div class='tiles m-2 float-left flex' style={{alignItems:'center', width:'160px', padding:'4px', borderRadius:'4px', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            <img src={elps} style={{height:'38px', width:'38px'}}/>
            <div class='p-2 text-left'>
            <p class='text-2xl mb-0'>105</p>
            <p class='text-sm text-slate-500 mb-0' style={{marginTop:'-8px'}}>Vacancies</p>
            </div>
            </div>

            <div class='tiles m-2 float-left flex' style={{alignItems:'center', width:'160px', padding:'4px', borderRadius:'4px', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            <img src={elps} style={{height:'38px', width:'38px'}}/>
            <div class='p-2 text-left'>
            <p class='text-2xl mb-0'>105</p>
            <p class='text-sm text-slate-500 mb-0' style={{marginTop:'-8px'}}>Vacancies</p>
            </div>
            </div>

            <div class='tiles m-2 float-left flex' style={{alignItems:'center', width:'160px', padding:'4px', borderRadius:'4px', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            <img src={elps} style={{height:'38px', width:'38px'}}/>
            <div class='p-2 text-left'>
            <p class='text-2xl mb-0'>105</p>
            <p class='text-sm text-slate-500 mb-0' style={{marginTop:'-8px'}}>Vacancies</p>
            </div>
            </div>

            <div class='tiles m-2 float-left flex' style={{alignItems:'center', width:'160px', padding:'4px', borderRadius:'4px', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            <img src={elps} style={{height:'38px', width:'38px'}}/>
            <div class='p-2 text-left'>
            <p class='text-2xl mb-0'>105</p>
            <p class='text-sm text-slate-500 mb-0' style={{marginTop:'-8px'}}>Vacancies</p>
            </div>
            </div>

            <div class='tiles m-2 float-left flex' style={{alignItems:'center', width:'160px', padding:'4px', borderRadius:'4px', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            <img src={elps} style={{height:'38px', width:'38px'}}/>
            <div class='p-2 text-left'>
            <p class='text-2xl mb-0'>105</p>
            <p class='text-sm text-slate-500 mb-0' style={{marginTop:'-8px'}}>Vacancies</p>
            </div>
            </div>

            <div class='tiles m-2 float-left flex' style={{alignItems:'center', width:'160px', padding:'4px', borderRadius:'4px', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
            <img src={elps} style={{height:'38px', width:'38px'}}/>
            <div class='p-2 text-left'>
            <p class='text-2xl mb-0'>105</p>
            <p class='text-sm text-slate-500 mb-0' style={{marginTop:'-8px'}}>Vacancies</p>
            </div>
            </div>

        </div>
        </Card>
      <Card style={{ height: '300px', marginBottom:'5px'}}>
        <Card.Body>
          <Card.Title class='text-left text-3xl'>Job Description</Card.Title>
          <br/>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>

      <div class='mt-4 w-full sm:px-8 px-12 md:px-4 overflow-hidden' style={{margin:'0 auto'}}>
      <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card class='w-full md:w-1/2' style={{float:'left', height:'300px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px'}}>
        <Card.Body class='p-8'>
          <Card.Title class='text-left text-2xl'>Documents Required</Card.Title>
          <br/>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          
          
        </Card.Body>
        </Card>
        <Card class='w-full md:w-1/2' style={{float:'left', height:'300px',marginBottom:'10px',marginLeft:'10px',marginRight:'15px'}}>
        <Card.Body class='p-8'>
          <Card.Title class='text-left text-2xl'>Documents Required</Card.Title>
          <br/>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          
          
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
      
      <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
        <Card style={{float:'left', height:'200px',width:'200px',marginBottom:'10px',marginLeft:'5px',marginRight:'5px', justifyContent:'center'}}>
        <Card.Body class='p-2'>
          <div class="inline-flex float-left">
          <img src={icon} class='h-16 w-16'/>
          <div class="txt" style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <p class='text-black text-left align-top'>Experience</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          <p class='text-slate-500 text-left align-bottom '>2-3 Years</p>
          </div>
          </div>
        </Card.Body>
        </Card>
      </div>
      </div>

      <div class="float-right w-full md:w-1/4 text-sm">
      <Card class='sticky top-0' style={{position:'sticky' , height:'360px', top:'0', marginBottom:'5px', borderRadius:'15px', backgroundImage: 'linear-gradient(50deg, #E61B1E, #4E47E5)'}}>
  <Card.Body>
    <Card.Title class="text-left text-2xl text-white">Let Us Call You</Card.Title>
    
    <p class="text-left text-white label-input100 mb-0 mt-2">Name</p>
  <input class="input100 mb-0 h-8 rounded w-full margin10" style={{ paddingLeft:'5px'}}  type="text" name="name" placeholder="Name"/>
  <br/>
  <p class="text-left text-white label-input100 mb-0 mt-2">Your Mobile</p>
  <input class="input100 rounded mb-0 h-8 w-full" style={{ paddingLeft:'5px'}} type="text" name="Mobile" placeholder="Mobile"/>
  <br/>
  <p class="text-left text-white label-input100 mb-0 mt-2">Email</p>
  <input class="rounded input100 mb-0 h-8 w-full" style={{ paddingLeft:'5px'}} type="text" name="email" placeholder="Email"/>
  <br/>
  <p class="text-left text-white label-input100 mb-0 mt-2">Message</p>
  <input class="rounded input100 mb-0 h-8 w-full" style={{ paddingLeft:'5px'}} type="text" name="Message" placeholder="Message"/>
  <br/>
  <br/>
  <button class="bg-white text-black py-2 px-4 float-left rounded">
      Button
  </button>

  </Card.Body>
</Card>
</div>

    </div>
    </div>

    );
}

export default Page;
