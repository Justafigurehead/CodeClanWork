package example.codeclan.com.robot;


import android.util.Log;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class RobotTest {

    Robot roboto;

    @Before
    public void setUp() throws Exception {
        roboto = new Robot("roboto", "Silver", 3);
    }

    @Test
    public void getName() throws Exception {
        assertEquals("roboto", roboto.getName());
    }

    @Test
    public void testHoover() throws Exception {
        roboto.hoover();
        Log.e("battery lvl", String.valueOf(roboto.getBatteryLvl()));
        assertEquals(90, roboto.getBatteryLvl());
    }
}
