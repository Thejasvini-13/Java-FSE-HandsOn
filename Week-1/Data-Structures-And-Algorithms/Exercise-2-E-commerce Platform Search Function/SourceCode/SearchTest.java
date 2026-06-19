import java.util.Scanner;

public class SearchTest {

    // Linear Search
    public static Product linearSearch(Product[] products, int targetId) {

        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int targetId) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = left + (right - left) / 2;

            if (products[mid].productId == targetId) {
                return products[mid];
            }

            if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Product ID to search: ");
        int searchId = sc.nextInt();

        Product linearResult = linearSearch(products, searchId);

        System.out.println("\nOutput:");

        if (linearResult != null) {
            System.out.println("Linear Search Found: " + linearResult.productName);
        } else {
            System.out.println("Product not found using Linear Search");
        }

        Product binaryResult = binarySearch(products, searchId);

        if (binaryResult != null) {
            System.out.println("Binary Search Found: " + binaryResult.productName);
        } else {
            System.out.println("Product not found using Binary Search");
        }

        System.out.println("\nAnalysis:");
        System.out.println("Linear Search Time Complexity: O(n)");
        System.out.println("Binary Search Time Complexity: O(log n)");
        System.out.println("Binary Search is more suitable for large datasets because it is faster.");

        sc.close();
    }
}