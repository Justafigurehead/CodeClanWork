package example.codeclan.com.navigationdrawables;

import android.support.annotation.NonNull;
import android.support.design.internal.BottomNavigationItemView;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements BottomNavigationView.OnNavigationItemSelectedListener {

    BottomNavigationView bottomNav;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        bottomNav = (BottomNavigationView) findViewById(R.id.bottomNav);
        bottomNav.setOnNavigationItemSelectedListener(this);
    }

    @Override
    public boolean onNavigationItemSelected(@NonNull MenuItem item) {

        String toastText = null;
        switch(item.getItemId()){
            case R.id.friend:
                toastText = "You clicked friends.";
                break;
            case R.id.music :
                toastText = "you clicked music";
                break;
            case R.id.jam :
                toastText = "Jam!";
                break;
        }

        Toast.makeText(this, toastText, Toast.LENGTH_SHORT).show();
        return true;
    }
}
