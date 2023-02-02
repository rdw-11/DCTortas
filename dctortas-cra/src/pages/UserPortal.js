import React from "react";
import { Button } from "react-bootstrap";

function UserPortal(props) {
  return (
    <>
      <div className="containCircle">
        <div class="circle">
          <p class="text">USER INITIALS</p>
        </div>
        <br />
      </div>
      <div>
        <span>Reid Williamson </span>
        <div>Customer ID: 987654312</div>
      </div>
      <hr />
      <br />
      <div className="portal_myInformation">
        <span>My Information</span>
        <p>Update address, phone numbers, etc.</p>
      </div>
      <div className="portal_pastOrders">
        <span>Past Orders</span>
        <p>See what you ordered last.</p>
      </div>
      <div className="portal_payment">
        <span>Payment</span>
        <p>Manage credit card info.</p>
      </div>
      <div className="portal_payment">
        <span>Food Allergies/Preferences</span>
        <p>Share dietary concerns.</p>
      </div>
      <div className="portal_payment">
        <span>Security Preferences</span>
        <p>2 Step verification.</p>
      </div>
      <div>
        <Button>Sign Out</Button>
      </div>
      <br />
    </>
  );
}

export default UserPortal;
