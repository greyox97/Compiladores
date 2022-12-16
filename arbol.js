import java.util.*;
import java.lang.*;
import java.io.*;

class Ideone
{
    private static Random RND = new Random(System.currentTimeMillis()); // useful for placing balls
    private static char[] BALLS = {'o','⌾','⛣','⏣','◍'}; // symbols being used as balls

    public static void main (String[] args) throws java.lang.Exception
    {
        int w = 27; // width of the tree
        int b = 10; // number of balls in the tree
        String tree = ""; // this will end up containing the tree

        // build tree
        w = ( w % 2 == 1 ) ? w : 13; // check whether width is odd
        for(int i=1;i<=w;i+=2){
            int s = (w - i) / 2;
            tree += repeat(' ', s) + repeat('*', i) + repeat(' ', s) + "\n";
        }

        // randomly replace some parts by balls
        int i=0;
        while(i < b){
            int j = RND.nextInt(tree.length());
            if(tree.charAt(j) == '*'){
                tree = tree.substring(0, j) + BALLS[RND.nextInt(BALLS.length)] + tree.substring(j+1);
                i++;
            }
        }

        // build trunk
        tree += repeat(' ', (w - 4) / 2) + repeat('*', 4) + "\n" + repeat(' ', (w - 4) / 2) + repeat('*', 4);

        // output
        System.out.println(tree);
    }

    // this function builds a String by repeating a given character a couple of times
    private static String repeat(char c, int l){
        String s = "";
        for(int i=0;i<l;i++)
            s += c;
        return s;
    }
}
