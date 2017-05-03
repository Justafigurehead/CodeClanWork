class Transaction{

  private String type; //SALE, REFUND, VOID

//The not solid way
  public void transferfunds(){
    if(this.type == "SALE"){

    }
    else if (this.type == "REFUND"){

    }
    else if (this.type == "VOID"){

    }
    else {

    }
    // and so on...

// Better to extend this class with its behaviours. 

  }
}