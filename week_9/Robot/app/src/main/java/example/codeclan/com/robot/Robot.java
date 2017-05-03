package example.codeclan.com.robot;


import android.util.Log;

public class Robot {
    String name;
    String metal;
    int age;
    int batteryLvl;

    public Robot(String name, String metal, int age) {
        this.name = name;
        this.metal = metal;
        this.age = age;
        this.batteryLvl = 100;

    }

    public String hoover(){
        for (int i = 0; i <= 10; i++){
            this.batteryLvl -= 1;

        }
        return "clean clean";
    }

    public int getBatteryLvl() {
        return batteryLvl;
    }

    public void setBatteryLvl(int batteryLvl) {
        this.batteryLvl = batteryLvl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMetal() {
        return metal;
    }

    public void setMetal(String metal) {
        this.metal = metal;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
