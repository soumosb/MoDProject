package com.cognizant.stockservice.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "sectors")
public class Sector {
	@Id
	@Column(name = "sc_id")
	@NotNull
	private long id;
	@NotNull
	@Column(name = "sc_name")
	private String name;
	@NotNull
	@Column(name = "sc_brief")
	private String brief;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	@Override
	public String toString() {
		return "sector [id=" + id + ", name=" + name + ", brief=" + brief + "]";
	}

}
