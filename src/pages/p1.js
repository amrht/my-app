import React from 'react';
import Navigation from './../components/navbar.js';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Page = () => {
	return(
		<div class='bg-slate-100 h-full'>
		<div class='search h-80 w-full bg-black'>
			<div class="grid">
				<span><input class="placeholder:italic mt-40 h-10 bg-white w-1/2 border rounded-l py-2 pl-9 pr-3 shadow-sm outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
				<button class="bg-white h-10 w-24 rounded-r">Search</button></span>
			</div>
		</div>
		<div class="cntr mx-8 w-9/10 block md:mx-40 mt-6 md:w-7/10 md:inline-flex" style={{ justifyContent:'space-around'}}>
			<div class='left w-full md:w-6/9' > 
			<Card style={{ height: '350px'}}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Job Description</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ height: '450px'}}>
        <Card.Body>
          <Card.Title>Job Description</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div class="w-full md:w-3/9">
      <Card style={{ height: '400px'}}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</div>
		</div>
		</div>

		);
}

export default Page;