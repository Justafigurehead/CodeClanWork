package com.codeclan.example.tddintro;
import static junit.framework.Assert.assertEquals;
import org.junit.Before;
import org.junit.Test;


/**
 * Created by user on 22/02/2017.
 */

public class RobotTest {
    Robot robot;

    @Before
    public void before(){
        robot = new Robot("C3PO", "Gold");
    }


    @Test
    public void testRobotoSetup(){
        assertEquals("C3PO", robot.getName());
        assertEquals("Gold", robot.getColour());

    }

    @Test
    public void testInitialBattery(){
        assertEquals(100.0, robot.getBattery(), 0.01);
    }

    @Test
    public void testSetBattery(){
        robot.setBatteryLvl(-10.0);
        assertEquals(90.0, robot.getBattery(), 0.01);
    }

    @Test
    public void testMakeDrink(){
        assertEquals("I am making tea.", robot.makeDrink("tea"));
        assertEquals(90.0, robot.getBattery(), 0.01);
    }

    @Test
    public void testWashDishes(){
        assertEquals("I am washing the dishes.", robot.washDishes());
        assertEquals(70.0, robot.getBattery(), 0.01);
    }

    @Test
    public void testDoDusting(){
        assertEquals("I am dusting.", robot.doDusting());
        assertEquals(80.0, robot.getBattery(), 0.01);
    }

    @Test
    public void testRechargeBattery(){
        robot.doDusting();
        robot.makeDrink("coffee");
        robot.rechargeToFull();
        assertEquals(100.0, robot.getBattery(), 0.01);
    }
}
