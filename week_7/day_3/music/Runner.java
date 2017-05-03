public class Runner {

    public static void main(String[] args) {

//        Make sure the artist is created first as it's a foreign key in the albums.
        Artist.deleteAll();
        Artist artistOne = new Artist("Led Zeppelin");
        Album album = new Album("Houses of the holy", "Rock", artistOne);
        Artist artistTwo = new Artist("Counting Crows");
        Artist artistThree = new Artist("The Jam");
        artistOne.save();
        artistTwo.save();
        artistThree.save();
        album.save();
        Artist.all();
        artistOne.getArtistDetails();
        artistOne.setName("Led Zep");
        artistOne.updateArtist();
        artistOne.getArtistDetails();

    }
}