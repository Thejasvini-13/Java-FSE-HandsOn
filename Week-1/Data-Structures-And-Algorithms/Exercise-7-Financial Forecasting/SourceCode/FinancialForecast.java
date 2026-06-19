import java.util.Scanner;

public class FinancialForecast {
    public static double forecast(double currentValue, double growthRate, int years) {

        if (years == 0) {
            return currentValue;
        }

        return forecast(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Current Value: ");
        double currentValue = sc.nextDouble();

        System.out.print("Enter Annual Growth Rate (%): ");
        double growthRate = sc.nextDouble() / 100;

        System.out.print("Enter Number of Years: ");
        int years = sc.nextInt();

        double futureValue = forecast(currentValue, growthRate, years);

        System.out.println("\nOutput:");
        System.out.printf("Predicted Future Value after %d years = %.2f%n",
                years, futureValue);

        System.out.println("\nAnalysis:");
        System.out.println("Time Complexity: O(n)");
        System.out.println("Space Complexity: O(n) due to recursive calls.");
        System.out.println("Optimization: Use iteration or memoization to avoid excessive recursion.");

        sc.close();
    }
}