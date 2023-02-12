package org.example;

public class Main {
    public static void main(String[] args) {
        Test test1 = new Test("phj");

        Test test2 = test1;

        test1.name = "cjs";

        System.out.println();
    }
}

class Test {
    String name;

    public Test(String name) {
        this.name = name;
    }
}