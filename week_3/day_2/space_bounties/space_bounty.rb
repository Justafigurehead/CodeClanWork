require('pg')


class SpaceBounty

  attr_accessor :name, :bounty_value, :species, :cashed_in


  def initialize(options)
    @id = options['id'] if options ['id'] !=nil
    @name = options['name']
    @bounty_value = options['bounty_value'].to_i
    @species = options['species']
    @cashed_in = options['cashed_in']
  end

#db CRUD functions

  def save()
    db = PG.connect( {dbname: 'space_bounties', host: 'localhost' } )
    sql = "INSERT INTO bounties (name, bounty_value, species, cashed_in) VALUES ('#{@name}','#{@bounty_value}','#{@species}','#{@cashed_in}') returning * ;"

    @id = db.exec(sql)[0]['id'].to_i
    db.close
      return 'You...have...successfully...saved.'
  end


  def update()
    db = PG.connect({dbname: 'space_bounties', host: 'localhost'})
    sql = "UPDATE bounties SET(name, bounty_value, species, cashed_in) = ('#{@name}', '#{@bounty_value}', '#{@species}', #{@cashed_in}) WHERE id =#{@id};"
    db.exec(sql)
    db.close
  end


  def delete()
    db = PG.connect({dbname: 'space_bounties', host: 'localhost' })

    sql = "DELETE FROM bounties WHERE id = #{@id}"
    db.exec(sql)
    db.close
  end


  #class methods

  def self.all()
    db = PG.connect ( {dbname: 'space_bounties', host: 'localhost'} )

    sql = "SELECT * FROM bounties;"
    bounties = db.exec(sql)
    db.close
      return bounties.map { |bounty| SpaceBounty.new(bounty)}   
  end



  def self.delete_all()
    db = PG.connect({dbname: 'space_bounties', host: 'localhost'})
    sql = "DELETE FROM bounties;"
    db.exec(sql)
    db.close
  end

end

