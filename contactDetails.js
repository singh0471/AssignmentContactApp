class ContactDetail {
    #detailID;
    type;
    value;
  
    constructor(detailID, type, value) {
      this.#detailID = detailID;
      this.type = type;
      this.value = value;
    }
  
    getDetailID() {
      return this.#detailID;
    }

    getType(){
        return this.type;
    }

    getValue(){
        return this.value;
    }

    static createNewDetail(detailID, type, value) {
        try {
          if (typeof detailID !== "number" || detailID < 0) {
            throw new Error("Invalid detail ID.");
          }
          if (typeof type !== "string") {
            throw new Error("Type must be a non-empty string.");
          }
          if (typeof value !== "string") {
            throw new Error("Value must be a non-empty string.");
          }
    
          return new ContactDetail(detailID, type, value);
        } catch (error) {
          console.log(error.message);
          return null; 
        }}
  
    updateDetail(propertyName, newValue) {
      try {
        switch (propertyName) {
          case "type":
            this.type = newValue;
            break;
          case "value":
            this.value = newValue;
            break;
          default:
            throw new Error("Invalid property name.");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  module.exports = ContactDetail;  
