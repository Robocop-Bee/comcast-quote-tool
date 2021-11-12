import './../assets/style/address-search.css'




const AddressSearch = () => {
    return ( 
        <div className="address">
            <label htmlFor="addressbar"></label>
            <input type="text" id='addressbar' placeholder="Address"/>
        </div>
     );
}
 
export default AddressSearch;