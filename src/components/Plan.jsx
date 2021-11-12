import './../assets/style/plan.css'

const Plan = (props) => {
    return ( 
        <div className="plan">
            <h2 className="planTitle">Plan Name</h2>
            <h3 className="planPrice">Price</h3>
            <div className="plan-metadata">
                <p>placeholder</p>
            </div>
            <button>Get Quote</button>
        </div>
     );
}
 
export default Plan;