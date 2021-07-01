package com.example.kitchen;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name="ingredients")
public class IngredientsTable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
//	@Column(name="IID")
//	Integer IID;
//	
//	@Column(name="Name")
//	String Name;
//	
//	@Column(name="Qty")
//	Integer Qty;
//
//	public Integer getIID() {
//		return IID;
//	}
//
//	public void setIID(Integer iID) {
//		IID = iID;
//	}
//
//	public String getName() {
//		return Name;
//	}
//
//	public void setName(String name) {
//		Name = name;
//	}
//
//	public Integer getQty() {
//		return Qty;
//	}
//
//	public void setQty(Integer qty) {
//		Qty = qty;
//	}
//
//	
//	
//	
	
	
	
	private Integer IID;
	private String Name;
	private Integer Qty;

	public IngredientsTable() {
		
	}

	public IngredientsTable(Integer iID, String name, Integer qty) {
		this.IID = iID;
		this.Name = name;
		this.Qty = qty;
	}
	
	public IngredientsTable(String name, Integer qty) {
		this.Name = name;
		this.Qty = qty;
	}
	
	
	
	public Integer getIID() {
		return IID;
	}

	public void setIID(Integer iID) {
		this.IID = iID;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		this.Name = name;
	}

	public Integer getQty() {
		return Qty;
	}

	public void setQty(Integer qty) {
		this.Qty = qty;
	}

	@Override
	public String toString() {
		return "IngredientsTable [IID=" + IID + ", Name=" + Name + ", Qty=" + Qty + "]";
	}
	
	
	
	
	
	
	
}
