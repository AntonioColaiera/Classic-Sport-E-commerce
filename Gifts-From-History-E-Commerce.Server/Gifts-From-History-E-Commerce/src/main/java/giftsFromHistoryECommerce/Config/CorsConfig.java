package giftsFromHistoryECommerce.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        // Create a configuration source for URL-based CORS configuration.
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        
        // Create a new CORS configuration.
        CorsConfiguration config = new CorsConfiguration();
        
        // Allow credentials to be sent or received in cross-origin requests.
        config.setAllowCredentials(true);
        
        // Add an allowed origin. In this case, it allows requests from a React frontend running locally.
        config.addAllowedOrigin("http://localhost:3000"); // Set the origin of your React frontend
        
        // Allow all headers to be included in the request.
        config.addAllowedHeader("*");
        
        // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.) to be used in cross-origin requests.
        config.addAllowedMethod("*");
        
        // Register the CORS configuration for all paths.
        source.registerCorsConfiguration("/**", config);
        
        // Create and return a new CorsFilter instance with the configured source.
        return new CorsFilter(source);
    }
}
