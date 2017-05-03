package com.codeclan.example.tddintro;

/**
 * Created by user on 22/02/2017.
 */


public class Robot {
    private String name;
    private String colour;
    private Double battery;


    public Robot(String name, String colour) {
        this.name = name;
        this.colour = colour;
        this.battery = 100.0;
    }

    public String getName() {
        return name;
    }

    public String getColour() {
        return colour;
    }

    public Double getBattery() {
        return battery;
    }

    public void setBatteryLvl(double batteryLvl) {
        this.battery += batteryLvl;
    }

    public String makeDrink(String drink) {
        setBatteryLvl(-10);
        return "I am making " + drink + ".";
    }

    public String washDishes() {
        setBatteryLvl(-30);
        return "I am washing the dishes.";
    }

    public String doDusting() {
        setBatteryLvl(-20);
        return "I am dusting.";
    }

    public void rechargeToFull() {
        this.battery = 100.0;
    }
}
