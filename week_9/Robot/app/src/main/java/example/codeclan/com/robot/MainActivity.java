package example.codeclan.com.robot;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {
Robot roboto;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        roboto = new Robot("roboto", "silver", 24);
        Log.d("Roboto", String.valueOf(roboto.getBatteryLvl()));
    }
}
