package com.lithan.Kyn.repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.lithan.Kyn.entities.Store;

@Repository
public interface StoreRepository  extends JpaRepository<Store, Integer> {
	@Query(value = 		  
		  	"SELECT c FROM Store c WHERE c.StoreName LIKE '%' || :searchKeyword || '%'"
		  	+ " OR c.StoreNumber LIKE '%' || :searchKeyword || '%'"
			+ " OR c.StoreLocation LIKE '%' || :searchKeyword || '%'"
		  )
  public List<Store> searchForStore(@Param("searchKeyword") String searchKeyword);
}
