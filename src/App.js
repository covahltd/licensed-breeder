import React from "react";
import jwt_decode from "jwt-decode";
import "./App.css";
import { OwnersListDropdown } from "./components/OwnersListDropdown";
import { printDiv } from "./components/printDiv.js";
import { format } from "./components/formatDate.js";

require("dotenv").config();
require("dotenv-flow").config();

function App() {
  const [user, setUser] = React.useState({});

  function handleCallbackResponse(response) {
    // console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    // console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  React.useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "308986279645-f2i0as4tq0t4vvm3tk1dt6ijhbed7bf1.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInButton"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  // If we have no user: sign in button
  // If we have a user: sign out button

  const [owner, setOwner] = React.useState({
    merge_fields: {},
  });

  return (
    <div>
      <div id="signInDiv" className="signInDiv">
        <h1>Sign In</h1>
        <div className="signInButton" id="signInButton"></div>
      </div>
      {Object.keys(user).length !== 0 && (
        <>
          <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
          <div className="intro" id="intro">
            <h1>Contract Generator</h1>
            <p>Pick a contract from the following dropdown:</p>
            <br />
            <label htmlFor="contract-type">Choose a contract: </label>
            <select name="contract-type" id="contract-type">
              <option value="standard_puppy">Standard Puppy</option>
              <option value="breeding_terms_puppy">Breeding Terms Puppy</option>
              <option value="*------------------*"></option>
              <option value="standard_adult">Standard Adult</option>
              <option value="breeding_terms_adult">Breeding Terms Adult</option>
            </select>
            <br />
            <React.Suspense>
              <label htmlFor="Owner">Choose an owner: </label>
              <OwnersListDropdown setOwner={setOwner}></OwnersListDropdown>
            </React.Suspense>
            <br />
            <button onClick={() => printDiv("printableArea")}>Print</button>
            <br />
          </div>
          <div className="page" id="printableArea">
            <table>
              <colgroup>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
                <col width="2%"></col>
              </colgroup>
              <tbody>
                <tr colSpan="37">
                  <td className="header1" colSpan="37"></td>
                  <td className="logo" colSpan="13" rowSpan="6">
                    <textarea
                      id="logo"
                      className="textarea logo"
                      defaultValue="Shamisha"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td className="header1" colSpan="37">
                    Section 1: Puppy's Details
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Puppy's Name
                  </td>
                  <td className="value" colSpan="25">
                    {owner.merge_fields.PETNAME}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Puppy's Date of Birth
                  </td>
                  <td className="value" colSpan="25">
                    {owner.merge_fields.PUPPYDOB}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Puppy's Sex
                  </td>
                  <td className="value" colSpan="25">
                    {owner.merge_fields.PUPPYSEX}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Puppy's Breed
                  </td>
                  <td className="value" colSpan="25">
                    {owner.merge_fields.BREED}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Puppy's Colour
                  </td>
                  <td className="value" colSpan="25">
                    {owner.merge_fields.COLOUR}
                  </td>
                </tr>
                <tr className="blank-row">
                  <td colSpan="50">
                    <br />
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Worm/Flea Treatment Dates
                  </td>
                  <td className="value" colSpan="38">
                    {owner.merge_fields.WORMING}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Kennel Club Registered Name
                  </td>
                  <td className="value" colSpan="38">
                    {owner.merge_fields.KCNAME}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Kennel Club Number
                  </td>
                  <td className="value" colSpan="38">
                    {owner.merge_fields.KCNUMBER}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Microchip Number
                  </td>
                  <td className="value" colSpan="38">
                    {owner.merge_fields.MICROCHIP}
                  </td>
                </tr>
                <tr className="blank-row">
                  <td colSpan="50">
                    <br />
                  </td>
                </tr>
                <tr>
                  <td colSpan="12"></td>
                  <td className="split-title" colSpan="18">
                    Sire (Father's) Details
                  </td>
                  <td colSpan="2"></td>
                  <td className="split-title" colSpan="18">
                    Dam (Mother's) Details
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Kennel Club Registered Name
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.SKCNAME}
                  </td>
                  <td colSpan="2"></td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.DKCNAME}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Kennel Club Number
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.SKCNUMBER}
                  </td>
                  <td colSpan="2"></td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.DKCNUMBER}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Microchip Number
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.SMICROCHIP}
                  </td>
                  <td colSpan="2"></td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.DMICROCHIP}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    DNA Tests
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.SDNATESTS}
                  </td>
                  <td colSpan="2"></td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.DDNATESTS}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="12">
                    Health Tests
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.SHEALTHTES}
                  </td>
                  <td colSpan="2"></td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.DHEALTHTES}
                  </td>
                </tr>
                <tr className="blank-row">
                  <td colSpan="50">
                    <br />
                  </td>
                </tr>
                <tr className="header">
                  <td colSpan="50">Section 2: Details of Both Parties</td>
                </tr>
                <tr>
                  <td colSpan="7"></td>
                  <td className="split-title" colSpan="18">
                    Seller's Details
                  </td>
                  <td className="label" colSpan="7"></td>
                  <td className="split-title" colSpan="18">
                    Owner's Details
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="7">
                    Title
                  </td>
                  <td className="value" colSpan="18">
                    Mr
                  </td>
                  <td className="label" colSpan="7">
                    Title
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.TITLE}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="7">
                    First Name(s)
                  </td>
                  <td className="value" colSpan="18">
                    Daniel Michael
                  </td>
                  <td className="label" colSpan="7">
                    First Name(s)
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.FNAME}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="7">
                    Last Name
                  </td>
                  <td className="value" colSpan="18">
                    Lambert
                  </td>
                  <td className="label" colSpan="7">
                    Last Name
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.LNAME}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="7">
                    Address
                  </td>
                  <td className="value" colSpan="18">
                    Clearbury Lodge
                  </td>
                  <td className="label" colSpan="7">
                    Address
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.ADDRESS1}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="7"></td>
                  <td className="value" colSpan="18">
                    Nunton Drove
                  </td>
                  <td className="label" colSpan="7"></td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.ADDRESS2}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="7"></td>
                  <td className="value" colSpan="18">
                    Salisbury
                  </td>
                  <td className="label" colSpan="7"></td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.ADDRESS3}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="7">
                    Postcode
                  </td>
                  <td className="value" colSpan="18">
                    SP5 4HZ
                  </td>
                  <td className="label" colSpan="7">
                    Postcode
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.POSTCODE}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="7">
                    Email
                  </td>
                  <td className="value" colSpan="18">
                    <a href="mailto:daniel@shamisha.co.uk">
                      daniel@shamisha.co.uk
                    </a>
                  </td>
                  <td className="label" colSpan="7">
                    Email
                  </td>
                  <td className="value" colSpan="18">
                    {owner.email_address}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="7">
                    Phone Number
                  </td>
                  <td className="value" colSpan="18">
                    <a href="tel:07453100210">07453 100210</a>
                  </td>
                  <td className="label" colSpan="7">
                    {" "}
                    Phone Number
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.PHONE}
                  </td>
                </tr>
                <tr className="blank-row">
                  <td colSpan="50">
                    <br />
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="7">
                    Invoice Number
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.INVOICE}
                  </td>
                  <td className="label" colSpan="7">
                    Total Paid
                  </td>
                  <td className="value" colSpan="18">
                    <input
                      id="total-paid"
                      className="input-box"
                      defaultValue="£1500.00"
                    ></input>
                  </td>
                </tr>
                <tr className="blank-row">
                  <td colSpan="50">
                    <br />
                  </td>
                </tr>
                <tr className="central-title">
                  <td colSpan="50">Definitions</td>
                </tr>
                <tr>
                  <td colSpan="50">
                    <ul className="definitions-list">
                      <li>
                        {" "}
                        <b>“Good Health”</b> means a condition of health free of
                        parasites and hereditary disorders and of reasonably
                        sound physical condition and temperament.
                      </li>
                      <li>
                        {" "}
                        <b>“Future Health and Welfare Needs”</b> means the
                        measures that should be taken to ensure that the Puppy
                        is and remains in Good Health and is properly housed,
                        fed, watered, trained, socialised and exercised and that
                        it receives appropriate veterinary attention.
                      </li>
                      <li>
                        {" "}
                        <b>“Seller”</b> means the person selling the Puppy
                        defined above, whether or not the breeder of the Puppy.
                      </li>
                      <li>
                        {" "}
                        <b>“Owner”</b> means the Buyer or person purchasing the
                        Puppy defined above.
                      </li>
                      <li>
                        {" "}
                        <b>“Puppy Information Guide”</b> means the included
                        guide laying out the Puppy’s Current and Future Health
                        and Welfare Needs and forms part of this agreement.
                      </li>
                      <li>
                        {" "}
                        <b>“Puppy Pack”</b> the folder containing all of the
                        paper work included with the sale of the Puppy
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="blank-row">
                  <td colSpan="50">
                    <br />
                  </td>
                </tr>
                <tr className="central-title">
                  <td colSpan="50">Terms and Conditions of Sale</td>
                </tr>
                <tr>
                  <td className="tsandcs" colSpan="50">
                    This is a legally binding contract of sale between the
                    Seller and the Owner of the Puppy all as detailed above in
                    Section 1 and 2.
                    <br />
                    In signing this contract, the Owner understands that:
                    <ol>
                      <li>
                        The Seller warrants:
                        <ol>
                          <li>
                            The Puppy sold under this contract and outlined in
                            the details above is the Puppy that was previously
                            selected or agreed upon by the Buyer.
                          </li>
                          <li>
                            That the Puppy is more than 8 weeks old on the date
                            of sale.
                          </li>
                          <li>
                            That the Puppy is in Good Health, other than as
                            outlined in the contract and/or as the Seller
                            informs the Buyer before the date of sale.
                          </li>
                          <li>
                            That the Puppy has received adequate care and that
                            the Seller has provided it with the opportunity to
                            socialise with dogs, humans and other animals it is
                            likely to come into contact with and it has
                            experienced and become accustomed to the sounds and
                            experiences of typical family life.
                          </li>
                          <li>
                            That, having made reasonable enquiries of the Buyer,
                            in good faith believes that the Buyer is able to
                            meet the Puppy's Future Health and Welfare Needs.
                          </li>
                        </ol>
                      </li>
                      <li>
                        The Buyer warrants:
                        <ol>
                          <li>
                            That he/she has read and understands the information
                            provided to him/her under <b>clauses 1.1 - 1.5</b>{" "}
                            above and contained in the Puppy Information Guide.
                          </li>
                          <li>
                            That he/she is purchasing the Puppy as a pet and not
                            for the purposes of breeding from it under any
                            circumstance.
                          </li>
                          <li>
                            That he/she in good faith believes that he/she will
                            be able, and intends, to meet the Puppy’s Future
                            Health and Welfare Needs.
                          </li>
                          <li>
                            That neither he/she nor any member of his/her
                            household has been cautioned for or convicted of any
                            breach of animal welfare law such as neglect,
                            cruelty or abandonment.
                          </li>
                          <li>
                            That in the event that he/she is no longer able or
                            willing to provide a home for the Puppy or otherwise
                            to meet the Puppy’s Future Health and Welfare Needs
                            he/she will contact the Seller and have regard to
                            any advice and recommendations that the Seller
                            provides, including return of the Puppy at the
                            option of the Seller. As it cannot be ensured that
                            the Puppy remains undamaged both physically and
                            mentally by the Seller no matter the length of time
                            the Buyer has had the Puppy in his/her possession no
                            refund will be given.
                          </li>
                          <li>
                            That the he/she will also not be eligible for a
                            refund for the following diagnoses (but not limited
                            to): minor heart murmurs and hernias, as these are
                            conditions that can occur in all breeds and are
                            deemed unlikely to cause the Puppy any long term
                            issues or prevent future Good Health.
                          </li>
                          <li>
                            The Seller will not be liable for any damages caused
                            by the Puppy to persons or property.
                          </li>
                          <li>
                            That he/she is purchasing the Puppy for
                            himself/herself and there is to be no resale of said
                            Puppy.
                          </li>
                          <li>
                            That he/she is not acting as an agent for a third
                            party.
                          </li>
                          <li>
                            That the Puppy is to be housed within the address
                            detailed above and not permanently in kennels.
                          </li>
                          <li>
                            That he/she is responsible for changing the
                            Registered Keeper’s details for the microchip number
                            on the registered microchip database and keeping
                            them up to date as now required by law.
                          </li>
                          <li>
                            That he/she will take the Puppy to a practicing
                            Veterinary Surgeon in time for its second
                            vaccinations as per the vaccination card included in
                            their Puppy Pack.
                          </li>
                        </ol>
                      </li>
                      <li>
                        Both the Buyer and Seller agree and understand:
                        <ol>
                          <li>
                            That the Puppy is a living creature with interests
                            independent of both Buyer and Seller.
                          </li>
                          <li>
                            That in order to meet the Puppy’s Future Health and
                            Welfare Needs it must be fed on the Seller’s
                            recommended food or food of an equivalent quality.
                          </li>
                          <li>
                            That neutering or spaying the Puppy before it
                            matures at 12 months of age is not allowed as it can
                            be detrimental to the development of the Puppy.
                          </li>
                          <li>
                            That the Buyer may suffer distress and inconvenience
                            as a result of the Puppy suffering pain or
                            discomfort and one purpose of the Seller's
                            warranties is to reduce or avoid such distress and
                            inconvenience.
                          </li>
                          <li>
                            This Puppy is subject to the following Kennel Club
                            endorsements:
                            <br />
                            R Progeny not eligible for registration
                            <br />
                            X Not eligible for the issue of an Export Pedigree
                            <br />
                            Endorsements can only be lifted by the breeder who
                            placed them, and the breeder would need to send a
                            written and signed instruction to this effect to the
                            Kennel Club.
                          </li>
                        </ol>
                      </li>
                      <li>
                        The Buyer has the right to return the puppy for full or
                        partial refund if:
                        <ol>
                          <li>
                            The Buyer has the Puppy examined by a practicing
                            Veterinary Surgeon within a 15 working day period
                            from the date of sale and during a period not
                            exceeding 24hrs after such examination returns the
                            Puppy to the Seller because of a serious diagnosis
                            such as blindness, deafness or a serious heart
                            murmur (other than described below in clause 4.1.1)
                            on production of a written report from the said
                            Veterinary Surgeon. The Seller will then require
                            their own Veterinary Surgeon to examine the Puppy at
                            the Buyer’s expense. Should both the Seller and
                            Buyer’s Veterinary Surgeons concur that the Puppy
                            will not remain in Good Health through a fault of
                            the breeding or the Seller’s rearing of the Puppy
                            until the date of sale; the Buyer will then be
                            refunded so long as no damage has been caused to the
                            Puppy physically or mentally during the possession
                            of the Puppy by Buyer.
                          </li>
                          <ol>
                            <li>
                              The Seller has notified and the Buyer acknowledges
                              the following diagnosis/diagnoses picked up by the
                              Buyer’s Veterinary Surgeon during the Puppy’s
                              first vaccinations and Vet Check.
                            </li>
                          </ol>
                        </ol>
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr className="blank-row">
                  <td colSpan="50">
                    <br />
                  </td>
                </tr>
                <tr>
                  <td className="split-title" colSpan="25">
                    Breeder/Seller Declaration
                  </td>
                  <td className="split-title" colSpan="25">
                    Owner Declaration
                  </td>
                </tr>
                <tr>
                  <td className="declaration" colSpan="25">
                    By signing this contract, I agree and understand that I am
                    entering into a legal and binding contract.
                  </td>
                  <td className="declaration" colSpan="25">
                    By signing this contract, I agree and understand that I am
                    entering into a legal and binding contract.
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="7">
                    Signed
                  </td>
                  <td className="value" colSpan="18"></td>
                  <td className="label" colSpan="7">
                    Signed
                  </td>
                  <td className="value" colSpan="18"></td>
                </tr>
                <tr>
                  <td className="label" colSpan="7">
                    Print Name
                  </td>
                  <td className="value" colSpan="18">
                    Mr Daniel M Lambert
                  </td>
                  <td className="label" colSpan="7">
                    Print Name
                  </td>
                  <td className="value" colSpan="18">
                    {owner.merge_fields.FNAME} {owner.merge_fields.LNAME}
                  </td>
                </tr>
                <tr>
                  <td className="label" colSpan="7">
                    Date
                  </td>
                  <td className="value" colSpan="18">
                    <input
                      id="date-seller"
                      className="input-box"
                      defaultValue={format(new Date())}
                    ></input>
                  </td>
                  <td className="label" colSpan="7">
                    Date
                  </td>
                  <td className="value" colSpan="18">
                    <input
                      id="date-owner"
                      className="input-box"
                      defaultValue={format(new Date())}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
