import React from 'react';

import './component.css';

export default function AboutUs() {
    return (
        <div>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, reprehenderit provident temporibus
                magni deserunt perferendis quibusdam tempora cumque repudiandae rerum aliquam officia iusto cum
                accusamus, dicta dignissimos soluta vitae vero! Alias sit beatae asperiores dolorem voluptas tempore
                obcaecati, est ab laborum reprehenderit in delectus quia, commodi suscipit quod assumenda eaque.</p>
            <h2>Contact Us</h2>
            <form action="">
                <label for="email">Email Address</label>
                <input id="email" type="email" name="email" />
                <label for="subject">Subject <span class="red">*</span></label>
                <input id="subject" type="text" name="subject" required />
                <label for="message">Message <span class="red">*</span></label>
                <textarea id="message" name="message" rows="10" required></textarea>
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}