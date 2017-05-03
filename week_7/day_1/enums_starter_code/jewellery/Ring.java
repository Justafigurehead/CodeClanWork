package jewellery;

public class Ring {

  private MetalType metal;
  private GemType gemtype;

  public Ring(MetalType metal, GemType gemtype) {
    this.metal = metal;
    this.gemtype = gemtype;
  }

  public MetalType getMetal(){
    return this.metal;
  }

  public GemType getGemType(){
    return this.gemtype;
  }
}